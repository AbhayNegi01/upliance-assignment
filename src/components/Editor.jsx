import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Quote } from "lucide-react";

const Editor = () => {
  const savedContent = localStorage.getItem("tiptap-content") || "";

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: savedContent,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      localStorage.setItem("tiptap-content", content);
    },
  });

  if (editor) {
    window.editor = editor;
  };

  return (
    <div className="bg-gray-300 p-4 border rounded-xl w-full max-w-lg max-h-3xl mx-8 my-20">
      {editor && (
        <div className="flex gap-5 mb-5 border p-2 rounded-lg bg-white/50 shadow-md">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-md ${editor.isActive("bold") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <Bold size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-md ${editor.isActive("italic") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <Italic size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded-md ${editor.isActive("underline") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <UnderlineIcon size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-md ${editor.isActive("bulletList") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <List size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-md ${editor.isActive("orderedList") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <ListOrdered size={18} />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded-md ${editor.isActive("blockquote") ? "bg-gray-300" : "bg-gray-100"}`}
          >
            <Quote size={18} />
          </button>
        </div>
      )}

      <EditorContent 
        editor={editor} 
        className="bg-white p-3 h-72 max-h-[300px] overflow-y-auto rounded-lg w-full border border-black overflow-hidden tiptap-editor" 
      />
    </div>
  );
};

export default Editor;
