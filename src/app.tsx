import api from '@/api/home';
import { LANGUAGE_LOCALE_FILE } from '@/constants';
import { App, ConfigProvider } from 'antd';
import React from 'react';
import './globals.css';

type LanguageType = 'zh' | 'en' | 'fr';

export async function getInitialState() {
  const userInfo = await api.getUserInfo();
  console.log('userInfo', userInfo);
  return {
    userInfo,
  };
}

function AppWrap({ children }: any) {
  const currentLanguage = localStorage.getItem('language') || 'zh';
  const fileName =
    LANGUAGE_LOCALE_FILE[currentLanguage as LanguageType] || 'zh_CN';
  const localeFile = require(`antd/es/locale/${fileName}`).default;
  return (
    <ConfigProvider
      locale={localeFile}
      theme={{
        token: {
          colorPrimary: '#1890ff',
          colorError: '#f53f3f',
          colorSuccess: '#1ea14c',
          colorWarning: '#ef6b0b',
          colorInfo: '#2491fc',
          colorTextBase: '#333333',
          colorText: '#333333',
          colorTextSecondary: '#666666',
          colorTextTertiary: '#999999',
          colorTextQuaternary: '#cccccc',
          colorBorder: '#E0E0E0',
          colorBorderSecondary: '#F0F0F0',
          fontSize: 14,
          wireframe: true,
          colorBgSpotlight: '#fff',
          boxShadow:
            '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
        },
        components: {
          Button: {},
          Dropdown: {
            fontSize: 14,
            controlHeight: 36,
            paddingXXS: 0,
          },
          Tooltip: {
            colorTextLightSolid: '#333',
            fontSize: 12,
          },
          Modal: {
            borderRadiusLG: 12,
            fontSize: 14,
            fontSizeLG: 16,
          },
          Notification: {
            borderRadiusLG: 12,
            fontSize: 14,
            fontSizeLG: 16,
            marginXS: 4,
            paddingMD: 16,
          },
          Segmented: {
            controlHeight: 32,
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}

export function rootContainer(container: React.ReactElement) {
  return React.createElement(AppWrap, null, container);
}
