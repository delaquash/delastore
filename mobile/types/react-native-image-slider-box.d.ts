// react-native-image-slider-box.d.ts

declare module "react-native-image-slider-box" {
  import { ReactNode } from "react";
  import { ViewStyle } from "react-native";

  export interface ImageSliderBoxProps {
    images: string[];
    sliderBoxHeight?: number;
    onCurrentImagePressed?: (index: number) => void;
    currentImageEmitter?: (index: number) => void;
    dotColor?: string;
    inactiveDotColor?: string;
    dotStyle?: ViewStyle;
    paginationBoxVerticalPadding?: number;
    autoplay?: boolean;
    circleLoop?: boolean;
    parentWidth?: number;
    resizeMode?: "cover" | "contain" | "stretch";
    ImageComponent?: ReactNode;
    imageLoadingColor?: string;
    paginationBoxStyle?: ViewStyle;
    paginationBoxVerticalAlign?: "top" | "center" | "bottom";
    autoplayInterval?: number;
    onImageChange?: (index: number) => void;
    currentPage?: number;
    imageLoadingIndicatorColor?: string;
    style?: ViewStyle;
    ImageComponentStyle?: any;
    
  }

  export default class ImageSliderBox extends React.Component<ImageSliderBoxProps> {}
}
