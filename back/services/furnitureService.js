import { Furniture } from "../models/furnitureModel.js";

export class FurnitureService {
  static async getAll() {
    return await Furniture.findAll();
  }

  static async getById(id) {
    return await Furniture.findByPk(id);
  }

  static async create(data) {
    return await Furniture.create(data);
  }

  static async update(id, data) {
    const furniture = await Furniture.findByPk(id);
    if (!furniture) return null;
    return await furniture.update(data);
  }

  static async delete(id) {
    const furniture = await Furniture.findByPk(id);
    if (!furniture) return false;
    await furniture.destroy();
    return true;
  }
}
