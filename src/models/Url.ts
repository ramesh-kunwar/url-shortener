import mongoose, { Document, Model } from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
}

const Url: Model<IUrl> =
  mongoose.models.URL || mongoose.model<IUrl>("URL", urlSchema);

export default Url;
