const GoogleCloudStorage = require("../Utilities/googleCloudStorage");

module.exports.uploadFile = async (req, res) => {
  try {
    // console.log(req.file.location);
    let url;

    if (req.file) {
      url = await GoogleCloudStorage.upload(req.file);
    }
    return res.json({
      url: url,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      url: "https://pngimg.com/uploads/qr_code/qr_code_PNG33.png",
    });
  }
};
