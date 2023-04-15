import { Box, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'

// chakra imports
import { Scrollbars } from 'react-custom-scrollbars-2'
import {
  renderThumb,
  renderTrack,
  renderView
} from '@/components/scrollbar/Scrollbar'
import { SidebarContent } from '@/components/sidebar/components/Content'

// Assets
import { Route } from '@/model/navigation'

type Props = {
  routes: Route[]
}

export const Sidebar: FC<Props> = ({ routes }) => {
  let variantChange = '0.2s linear'
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset'
  )
  // Chakra Color Mode
  let sidebarBg = useColorModeValue('white', 'navy.800')
  let sidebarMargins = '0px'

  // SIDEBAR
  return (
    <Box display={{ sm: 'none', xl: 'block' }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <SidebarContent routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  )
}
