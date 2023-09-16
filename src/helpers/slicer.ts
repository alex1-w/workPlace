import { IReview } from "@/types/IReview"
export const slicer = (array: any[], sliceCount: number): IReview[] => array.slice(0, sliceCount)

// передача типа пропсом 