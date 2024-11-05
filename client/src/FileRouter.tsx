// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

const PRESERVED = import.meta.glob('/src/pages/(_app|404).tsx', { eager: true })
const ROUTES = import.meta.glob('/src/pages/**/[a-z[]*.tsx', { eager: true })

const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
    return { ...preserved, [key]: PRESERVED[file].default }
}, {})

const routes = Object.keys(ROUTES).map((route) => {
    const path = route
        .replace(/\/src\/pages|index|\.tsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1')

    return { path, component: ROUTES[route].default }
})

export const FileRouter = () => {
    const App = preserved?.['_app'] || Fragment
    const NotFound = preserved?.['404'] || Fragment
    console.log(routes)
    return (
        <App>
            <Routes>
                {routes.map(({ path, component: Component = Fragment }) => (
                    <Route key={path} path={path} element={<Component/>} />
                ))}
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </App>
    )
}
