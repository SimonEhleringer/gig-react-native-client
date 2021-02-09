import React from 'react';
import { View } from 'react-native';
import { PADDING } from '../../config/themes';

interface PaddingViewProps {
  padding?: number;
}

const PaddingView: React.FC<PaddingViewProps> = ({ padding }) => {
  return <View style={{ height: padding ? padding : PADDING }} />;
};

export default PaddingView;
