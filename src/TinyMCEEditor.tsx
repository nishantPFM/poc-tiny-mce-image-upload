import { Editor } from "@tinymce/tinymce-react";

function TinyMCEEditor() {
  const handleEditorChange = (content: string) => {
    console.log(content);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Editor
        apiKey="t2p3lab8aytlzwpjzjjqct8gqjmhzimt02yl0y8wpx2ywxq5"
        onEditorChange={handleEditorChange}
        init={{
          menubar: false,
          width: "100%",
          height: "100vh",
          image_caption: true,
          plugins: 'image',
          toolbar: 'image',
        }}  
      />
    </div>

  );
}

export default TinyMCEEditor;
