import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";

type CopyMap = Record<string, string>;

export const useSiteCopy = (pageKey: string) => {
  const { i18n, t } = useTranslation();
  const queryClient = useQueryClient();
  const lang = i18n.language?.split("-")[0] || "en";

  const { data: dbCopy = {} } = useQuery<CopyMap>({
    queryKey: ["site-copy", pageKey, lang],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_copy")
        .select("copy_key, content")
        .eq("page_key", pageKey)
        .eq("language", lang);

      if (error) throw error;

      const map: CopyMap = {};
      data?.forEach((row) => {
        map[row.copy_key] = row.content;
      });
      return map;
    },
    staleTime: 1000 * 60 * 5,
  });

  const saveMutation = useMutation({
    mutationFn: async ({ copyKey, content }: { copyKey: string; content: string }) => {
      const { error } = await supabase.from("site_copy").upsert(
        { page_key: pageKey, copy_key: copyKey, language: lang, content },
        { onConflict: "page_key,copy_key,language" }
      );
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-copy", pageKey, lang] });
    },
  });

  const c = (copyKey: string, i18nKey?: string): string => {
    if (dbCopy[copyKey]) return dbCopy[copyKey];
    if (i18nKey) return t(i18nKey);
    return t(copyKey);
  };

  const save = (copyKey: string, content: string) => {
    saveMutation.mutate({ copyKey, content });
  };

  return { c, save, pageKey };
};
