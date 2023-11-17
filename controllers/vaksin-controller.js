// controllers/vaksin-controller.js
const Vaksin = require("../models/vaksin");

exports.selectVaksin = async (req, res, next) => {
  try {
    const [vaksinArray, _] = await Vaksin.selectVaksin();
    const vaksin = vaksinArray[0];
    res.status(200).json({ vaksin });
  } catch (error) {
    next(error);
  }
};

exports.selectVaksinById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }

    const [vaksinArray, _] = await Vaksin.selectVaksinById(id);
    const vaksin = vaksinArray[0];

    if (!vaksin || vaksin.length === 0) {
      return res.status(404).json({ message: "Vaksin not found" });
    }

    res.status(200).json({ vaksin });
  } catch (error) {
    next(error);
  }
};

exports.insertVaksin = async (req, res, next) => {
  try {
    const { v_name, v_category, v_stock } = req.body;

    if (!v_name || !v_category || !v_stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVaksin = new Vaksin(v_name, v_category, v_stock);
    const insertedVaksin = await newVaksin.insertVaksin();

    res
      .status(201)
      .json({ message: "Vaksin added successfully", data: insertedVaksin });
  } catch (error) {
    next(error);
  }
};

exports.deleteVaksin = async (req, res, next) => {
  try {
    const [result, _] = await Vaksin.deleteVaksin();
    res.status(200).json({ message: "Vaksin deleted successfully", data: result });
  } catch (error) {
    next(error);
  }
};

exports.deleteVaksinById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
    }
    const [result, _] = await Vaksin.deleteVaksinById(id);
    res
      .status(200)
      .json({ message: "Vaksin deleted successfully", data: result });
  } catch (error) {
    next(error);
  }
};

// controllers/vaksin-controller.js
exports.updateVaksinById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { v_name, v_category, v_stock } = req.body;
  
      if (!id) {
        return res.status(400).json({ message: "ID parameter is required" });
      }
  
      // Buat objek yang hanya berisi kolom-kolom yang ingin diupdate
      const updateData = {
        name: v_name || null,
        category: v_category || null,
        stock: v_stock || null,
      };
  
      await Vaksin.updateVaksinById(id, updateData);
      res.status(200).json({ message: "Vaksin updated successfully" });
    } catch (error) {
      next(error);
    }
  };
  