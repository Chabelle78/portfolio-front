import im1 from "../../../../../src/pictures/im1.jpg";
import im2 from "../../../../../src/pictures/im2.jpg";
import im3 from "../../../../../src/pictures/im3.jpg";
import im4 from "../../../../../src/pictures/im4.jpg";
import im5 from "../../../../../src/pictures/im5.jpg";
import im6 from "../../../../../src/pictures/im6.jpg";

export const media = [im1, im2, im3, im4, im5, im6];
export const mediaByIndex = (index) => media[index % media.length];
