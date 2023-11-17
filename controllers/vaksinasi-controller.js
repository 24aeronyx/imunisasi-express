const Vaksinasi = require("../models/vaksinasi");

exports.selectVaksinasi = async (req, res, next) => {
  try {
    const [vaksinasiArray, _] = await Vaksinasi.selectVaksinasi();
    const vaksinasi = vaksinasiArray[0];
    res.status(200).json({ vaksinasi });
  } catch (error) {
    next(error);
  }
};

exports.selectVaksinasiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "All ID parameters are required" });
    }
    const [vaksinasiArray, _] = await Vaksinasi.selectVaksinasiById(id);
    const vaksinasi = vaksinasiArray[0];
    if (!vaksinasi || vaksinasi.length === 0) {
      return res.status(404).json({ message: "Vaksinasi not found" });
    }
    res.status(200).json({ vaksinasi });
  } catch (error) {
    next(error);
  }
};

exports.insertVaksinasi = async (req, res, next) => {
  try {
    const { vi_p_id, vi_v_id, vi_l_id } = req.body;
    if (!vi_p_id || !vi_v_id || !vi_l_id) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newVaksinasi = new Vaksinasi(vi_p_id, vi_v_id, vi_l_id);
    const insertedVaksinasi = await newVaksinasi.insertVaksinasi();

    res
      .status(201)
      .json({
        message: "Vaksinasi added successfully",
        data: insertedVaksinasi,
      });
  } catch (error) {
    next(error);
  }
};

exports.deleteVaksinasi = async (req, res, next) => {
  try {
    const [result, _] = await Vaksinasi.deleteVaksinasi();
    res
      .status(200)
      .json({ message: "Vaksinasi deleted successfully", data: result });
  } catch (error) {
    next(error);
  }
};

exports.deleteVaksinasiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "All ID parameters are required" });
    }
    await Vaksinasi.deleteVaksinasiById(id);
    res.status(200).json({ message: "Vaksinasi deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateVaksinasiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { vi_p_id, vi_v_id, vi_l_id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }

    // Corrected parameter names to match the model attributes
    const updateData = {
      p_id: vi_p_id || null,
      v_id: vi_v_id || null,
      l_id: vi_l_id || null,
    };

    await Vaksinasi.updateVaksinasiById(id, updateData);
    res.status(200).json({ message: "Vaksinasi updated successfully" });
  } catch (error) {
    next(error);
  }
};
