import { Editor } from "@tinymce/tinymce-react";

function TinyMCEEditor() {
  const handleEditorChange = (content: string) => {
    console.log(content);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onEditorChange={handleEditorChange}
        init={{
          menubar: false,
          width: "100%",
          height: "100vh",
          // image_caption: true, // Option to enable image caption
          // plugins: "image file", // Plugin to enable image and file upload
          // toolbar: "image file", // Toolbar option to include image and file upload buttons
          // file_picker_types: "file image", // Picker types to allow file and image uploads
          // file_picker_callback: (callback, value, meta) => {
          //   const input = document.createElement("input");
          //   input.setAttribute("type", "file");
          //   input.setAttribute("accept", "image/*");

          //   input.onchange = function () {
          //     const file = (this as HTMLInputElement).files?.[0];
          //     if (file) {
          //       const reader = new FileReader();
          //       reader.onload = function () {
          //         callback(reader.result as string, { text: file.name });
          //       };
          //       reader.readAsDataURL(file);
          //     }
          //   };

          //   input.click();
          // },
          // a11y_advanced_options: true, // Option to enable advanced accessibility options for images
          // image_list: true, // Option to enable image list plugin
          // image_advtab: true, // Option to enable advanced image tab
          // image_class_list: true, // Option to enable image class list
          // image_description: true, // Option to enable image description
          // image_dimensions: true, // Option to enable image dimensions
          // image_prepend_url: true, // Option to enable prepend URL for images
          // image_title: true, // Option to enable image title
          // image_uploadtab: true, // Option to enable image upload tab
          // images_file_types: "jpg jpeg png gif", // Option to specify allowed image file types
          // images_upload_base_path: "/path/to/images", // Option to set base path for image uploads
          // images_upload_credentials: true, // Option to enable credentials for image uploads
          // images_upload_handler: (blobInfo, success, failure) => {
          //   // Custom function to handle image uploads
          // },
          // images_upload_url: "/api/images/upload", // Option to set URL for image uploads
          // object_resizing: true, // Option to enable object resizing
          // resize_img_proportional: true, // Option to enable proportional image resizing
          // typeahead_urls: true, // Option to enable typeahead for image URLs
        }}
      />
    </div>
  );
}

export default TinyMCEEditor;
