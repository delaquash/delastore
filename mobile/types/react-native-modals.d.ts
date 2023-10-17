import { ViewStyle } from 'react-native';

declare module 'react-native-modals' {
  import React, { ReactNode } from 'react';

  export interface SlideAnimationConfig {
    slideFrom: 'top' | 'bottom' | 'left' | 'right';
  }

  export class SlideAnimation {
    constructor(config: SlideAnimationConfig);
  }

  export interface BottomModalProps {
    onBackdropPress?: () => void;
    swipeDirection?: Array<'up' | 'down' | 'left' | 'right'>;
    swipeThreshold?: number;
    modalAnimation?: SlideAnimation;
    children?: ReactNode;
    visible?: boolean;
    onHardwareBackPress?: () => void;
    onTouchOutside?: () => void;
  }

  export class BottomModal extends React.Component<BottomModalProps> {}

  export interface ModalContentProps {
    children?: ReactNode;
    style?: ViewStyle
  }

  export class ModalContent extends React.Component<ModalContentProps> {}

  export class ModalPortal {
    static openModal(content: React.ReactElement, options?: {
      animationDuration?: number;
      onAnimateOutFinish?: () => void;
    }): void;
    static closeModal(): void;
  }

  export default BottomModal;
}
  