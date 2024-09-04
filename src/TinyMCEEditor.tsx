import { Editor } from "@tinymce/tinymce-react";
import { useRef, MutableRefObject } from "react";

function TinyMCEEditor() {
  // Handler function to log the editor content when it changes}
  const editorRef: MutableRefObject<any> = useRef(null);

  const handleEditorChange = (content: string) => {
    console.log(content);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // TinyMCE API key for cloud-based features
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        // Event handler for content changes
        onEditorChange={handleEditorChange}
        // TinyMCE initialization options
        init={{
          menubar: false, // Hide the menu bar
          width: "100%", // Set editor width to 100% of container
          height: "100vh", // Set editor height to 100% of viewport height
          plugins: "image", // Enable the image plugin
          toolbar: "image", // Add image button to the toolbar
          a11y_advanced_options: true, // Enable advanced accessibility options
          file_picker_types: "image", // Allow only image file picking
          // Custom file picker callback for image uploads
          file_picker_callback: function (cb, value, meta) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function () {
              const file = input.files![0];
              const reader = new FileReader();
              reader.onload = function () {
                const id = "blobid" + new Date().getTime();
                const blobCache = editorRef.current.editorUpload.blobCache;
                const base64 = (reader.result as string).split(",")[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
            input.click();
          },
          image_caption: true, // Enable image caption,
          // image_list lets you specify a predefined list of sources for images.
          image_list: [
            { title: "My image 1", value: "https://picsum.photos/200/300" },
            { title: "My image 2", value: "https://picsum.photos/200/301" },
            {
              title: "My images",
              menu: [
                { title: "My image 1", value: "https://picsum.photos/200/300" },
                { title: "My image 2", value: "https://picsum.photos/200/301" },
              ],
            },
          ],
          image_advtab: true, // This option adds an "Advanced" tab to the image dialog allowing you to add custom styles, spacing and borders to images.|
          // image_class_list lets you specify a predefined list of classes for images.
          image_class_list: [
            { title: "None", value: "" },
            { title: "Center", value: "center" },
            { title: "Right", value: "right" },
            { title: "Left", value: "left" },
            {
              title: "nested",
              menu: [
                { title: "None", value: "" },
                { title: "Center", value: "center" },
                { title: "Right", value: "right" },
                { title: "Left", value: "left" },
              ],
            },
          ],
          content_css: "src/index.css", // This is the path to the CSS file that will be used to style the images.
          image_description: true, // This option adds a description field to the image dialog.
          image_dimensions: true, // This option adds dimensions to the image dialog.
          image_title: true, // This option adds a title field to the image dialog.
          // image_prepend_url: "https://sampleurl.com/", // This option allows you to specify a URL prefix that will be applied to images when appropriate.
          image_uploadtab: true, // This option adds an "Upload" tab to the image dialog allowing you to upload local images, when the images_upload_url is also configured.
          images_file_types: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp", // This option allows you to specify the image file types that are allowed to be uploaded.
          images_upload_base_path:
            "https://www.yourdomain.com/path/to/image/folder", // This option specifies the base path to which the image will be uploaded.
          images_upload_credentials: true, // The images_upload_credentials option specifies whether calls to the configured images_upload_url should pass along credentials (such as cookies, authorization headers, or TLS client certificates) for cross-domain uploads. When set to true, credentials will be sent to the upload handler, similar to the withCredentials property of XMLHttpRequest.
          object_resizing: true, // This option allows you to specify whether images should be resized when they are inserted into the editor.
          // object_resizing: 'img', // This option allows you to specify the type of object that should be resized.
          resize_img_proportional: true, // This option allows you to specify whether the image should be resized proportionally.
          typeahead_urls: false, // This option allows you to specify whether the typeahead URLs should be enabled.
        }}
      />
    </div>
  );
}

export default TinyMCEEditor;
