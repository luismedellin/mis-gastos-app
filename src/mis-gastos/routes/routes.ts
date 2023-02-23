import { lazy, LazyExoticComponent } from 'react';
// import { NoLaxy } from '../01-lazyload/pages/NoLaxy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { DashboardPage, SummaryPage } from '..';

type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    // Component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
}

// const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/mis-gastos/*',
        to: '/mis-gastos/dashboard',
        // Component: DashboardPage,
        name: 'Dashboard'
    },
    {
        path: '/resumen',
        to: '/mis-gastos/resumen',
        // Component: SummaryPage,
        name: 'Resumen'
    },
    {
        path: '/maestro',
        to: '/mis-gastos/maestros',
        // Component: SummaryPage,
        name: 'Maestros'
    }
]