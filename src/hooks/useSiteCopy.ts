import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";

type CopyMap = Record<string, string>;

export const useSiteCopy = (pageKey: string) => {
  const { i18n, t } = useTranslation();
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

  // Returns DB value if it exists, otherwise falls back to i18n
  const c = (copyKey: string, i18nKey?: string): string => {
    if (dbCopy[copyKey]) return dbCopy[copyKey];
    if (i18nKey) return t(i18nKey);
    return t(copyKey);
  };

  return { c, dbCopy };
};

// Hook for admin editing
export const useSiteCopyAdmin = () => {
  const queryClient = useQueryClient();

  const allCopy = useQuery({
    queryKey: ["site-copy-all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_copy")
        .select("*")
        .order("page_key")
        .order("copy_key");
      if (error) throw error;
      return data;
    },
  });

  const upsert = useMutation({
    mutationFn: async (row: {
      page_key: string;
      copy_key: string;
      language: string;
      content: string;
    }) => {
      const { error } = await supabase.from("site_copy").upsert(row, {
        onConflict: "page_key,copy_key,language",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-copy"] });
      queryClient.invalidateQueries({ queryKey: ["site-copy-all"] });
    },
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("site_copy").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-copy"] });
      queryClient.invalidateQueries({ queryKey: ["site-copy-all"] });
    },
  });

  return { allCopy, upsert, remove };
};
