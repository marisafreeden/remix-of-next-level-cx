import { useState } from "react";
import { useSiteCopyAdmin } from "@/hooks/useSiteCopy";
import { useToast } from "@/hooks/use-toast";
import "@/App.css";

const PAGES = [
  { key: "home", label: "Homepage" },
  { key: "uc", label: "Unified Communications" },
  { key: "sip", label: "SIP Trunking" },
  { key: "video", label: "Video & Messaging" },
  { key: "sms", label: "Business SMS" },
  { key: "voice", label: "Voice Chatbots" },
  { key: "pricing", label: "Pricing" },
  { key: "resources", label: "Resources" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

const AdminCopy = () => {
  const { allCopy, upsert, remove } = useSiteCopyAdmin();
  const { toast } = useToast();
  const [filterPage, setFilterPage] = useState("all");
  const [filterLang, setFilterLang] = useState("all");

  // New entry form
  const [newPage, setNewPage] = useState("home");
  const [newKey, setNewKey] = useState("");
  const [newLang, setNewLang] = useState("en");
  const [newContent, setNewContent] = useState("");

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const filtered = (allCopy.data || []).filter((row) => {
    if (filterPage !== "all" && row.page_key !== filterPage) return false;
    if (filterLang !== "all" && row.language !== filterLang) return false;
    return true;
  });

  const handleAdd = async () => {
    if (!newKey.trim() || !newContent.trim()) {
      toast({ title: "Error", description: "Key and content are required", variant: "destructive" });
      return;
    }
    try {
      await upsert.mutateAsync({
        page_key: newPage,
        copy_key: newKey.trim(),
        language: newLang,
        content: newContent.trim(),
      });
      toast({ title: "Saved", description: "Copy added successfully" });
      setNewKey("");
      setNewContent("");
    } catch {
      toast({ title: "Error", description: "Failed to save", variant: "destructive" });
    }
  };

  const handleSave = async (row: typeof filtered[0]) => {
    try {
      await upsert.mutateAsync({
        page_key: row.page_key,
        copy_key: row.copy_key,
        language: row.language,
        content: editContent.trim(),
      });
      toast({ title: "Updated", description: "Copy saved" });
      setEditingId(null);
    } catch {
      toast({ title: "Error", description: "Failed to update", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await remove.mutateAsync(id);
      toast({ title: "Deleted" });
    } catch {
      toast({ title: "Error", description: "Failed to delete", variant: "destructive" });
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Site Copy Manager</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>
        Edit H1 and H2 headings across all pages. Changes override i18n defaults.
      </p>

      {/* Add new */}
      <div style={{
        background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12,
        padding: 24, marginBottom: 32
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Add New Copy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
          <select value={newPage} onChange={(e) => setNewPage(e.target.value)} style={selectStyle}>
            {PAGES.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
          </select>
          <input
            placeholder="Copy key (e.g. hero_title1)"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            style={inputStyle}
          />
          <select value={newLang} onChange={(e) => setNewLang(e.target.value)} style={selectStyle}>
            {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </div>
        <textarea
          placeholder="Content text..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
        />
        <button onClick={handleAdd} style={btnStyle}>
          {upsert.isPending ? "Saving..." : "Add Copy"}
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <select value={filterPage} onChange={(e) => setFilterPage(e.target.value)} style={selectStyle}>
          <option value="all">All Pages</option>
          {PAGES.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
        </select>
        <select value={filterLang} onChange={(e) => setFilterLang(e.target.value)} style={selectStyle}>
          <option value="all">All Languages</option>
          {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
        <span style={{ color: "#9ca3af", alignSelf: "center", fontSize: 14 }}>
          {filtered.length} entries
        </span>
      </div>

      {/* Table */}
      {allCopy.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb", textAlign: "left" }}>
                <th style={thStyle}>Page</th>
                <th style={thStyle}>Key</th>
                <th style={thStyle}>Lang</th>
                <th style={{ ...thStyle, width: "40%" }}>Content</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={tdStyle}>
                    <span style={badgeStyle}>{row.page_key}</span>
                  </td>
                  <td style={tdStyle}>
                    <code style={{ fontSize: 12, background: "#f3f4f6", padding: "2px 6px", borderRadius: 4 }}>
                      {row.copy_key}
                    </code>
                  </td>
                  <td style={tdStyle}>
                    <span style={{ ...badgeStyle, background: "#dbeafe", color: "#1d4ed8" }}>
                      {row.language}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    {editingId === row.id ? (
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        style={{ ...inputStyle, minHeight: 60, width: "100%" }}
                      />
                    ) : (
                      <span>{row.content}</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {editingId === row.id ? (
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => handleSave(row)} style={{ ...btnSmall, background: "#059669", color: "#fff" }}>
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)} style={btnSmall}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          onClick={() => { setEditingId(row.id); setEditContent(row.content); }}
                          style={btnSmall}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          style={{ ...btnSmall, color: "#dc2626" }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: 24, textAlign: "center", color: "#9ca3af" }}>
                    No copy entries yet. Add one above to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", border: "1px solid #d1d5db",
  borderRadius: 8, fontSize: 14, fontFamily: "Inter, sans-serif",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle, background: "#fff", cursor: "pointer",
};

const btnStyle: React.CSSProperties = {
  marginTop: 12, padding: "10px 24px", background: "#111827", color: "#fff",
  border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer",
};

const btnSmall: React.CSSProperties = {
  padding: "4px 12px", border: "1px solid #d1d5db", borderRadius: 6,
  fontSize: 12, background: "#fff", cursor: "pointer",
};

const thStyle: React.CSSProperties = { padding: "12px 8px", fontWeight: 600 };
const tdStyle: React.CSSProperties = { padding: "12px 8px", verticalAlign: "top" };
const badgeStyle: React.CSSProperties = {
  display: "inline-block", padding: "2px 8px", borderRadius: 4,
  fontSize: 11, fontWeight: 600, background: "#f3f4f6", color: "#374151",
  textTransform: "uppercase",
};

export default AdminCopy;
