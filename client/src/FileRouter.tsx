import React, { FC, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/_app';

interface Preserved {
  _app?: React.ComponentType;
  '404'?: React.ComponentType;
}

interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

type GlobImport = Record<string, { default: React.ComponentType }>;

const PRESERVED: GlobImport = import.meta.glob('/src/pages/(_app|404).tsx', {
  eager: true,
});
const ROUTES: GlobImport = import.meta.glob('/src/pages/**/[a-z[]*.tsx', {
  eager: true,
});

const preserved: Preserved = Object.keys(PRESERVED).reduce<Preserved>(
  (preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, '') as keyof Preserved;
    preserved[key] = PRESERVED[file].default;
    return preserved;
  },
  {},
);

const routes: RouteConfig[] = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');
  return { path, component: ROUTES[route].default };
});

export const FileRouter: FC = () => {
  const App = preserved['_app'] || Fragment;
  const NotFound = preserved['404'] || Fragment;
  return (
    <App>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  );
};
