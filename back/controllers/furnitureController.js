import { FurnitureService } from "../services/furnitureService.js";

export class FurnitureController {
  static async getAll(req, res) {
    const furniture = await FurnitureService.getAll();
    res.json(furniture);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const furniture = await FurnitureService.getById(id);
    if (furniture) return res.json(furniture);
    res.status(404).json({ message: "No se encontró el mueble" });
  }

  static async create(req, res) {
    try {
      const newFurniture = await FurnitureService.create(req.body);
      res.status(201).json(newFurniture);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updatedFurniture = await FurnitureService.update(id, req.body);
    if (updatedFurniture) return res.json(updatedFurniture);
    res.status(404).json({ message: "No se encontró el mueble" });
  }

  static async delete(req, res) {
    const { id } = req.params;
    const result = await FurnitureService.delete(id);
    if (result) return res.json({ message: "Mueble eliminado" });
    res.status(404).json({ message: "No se encontró el mueble" });
  }
}
