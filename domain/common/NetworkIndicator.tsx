import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { ListItem } from 'react-native-elements';
import { useTheme } from '../../hooks/useTheme';

interface NetworkIndicatorProps {}

const NetworkIndicator: React.FC<NetworkIndicatorProps> = ({}) => {
  const theme = useTheme();
  const netInfo = useNetInfo();

  return (
    <>
      {!netInfo.isInternetReachable && (
        <ListItem.Chevron
          name='signal-wifi-off'
          type='material'
          size={25}
          color={theme.colors?.error}
        />
      )}
    </>
  );
};

export default NetworkIndicator;
