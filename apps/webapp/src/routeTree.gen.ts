/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/_index'
import { Route as DeferredImport } from './routes/deferred'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexIndexImport } from './routes/_index/index'
import { Route as IndexPostIdImport } from './routes/_index/$postId'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/dashboard'
import { Route as AuthRegisterImport } from './routes/_auth/register'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AuthenticatedDashboardIndexImport } from './routes/_authenticated/dashboard/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/_index',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  id: '/deferred',
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexIndexRoute = IndexIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => IndexRoute,
} as any)

const IndexPostIdRoute = IndexPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => IndexRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/_auth/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/_auth/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedDashboardIndexRoute =
  AuthenticatedDashboardIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_index': {
      id: '/_index'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/register': {
      id: '/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_index/$postId': {
      id: '/_index/$postId'
      path: '/$postId'
      fullPath: '/$postId'
      preLoaderRoute: typeof IndexPostIdImport
      parentRoute: typeof IndexImport
    }
    '/_index/': {
      id: '/_index/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexIndexImport
      parentRoute: typeof IndexImport
    }
    '/_authenticated/dashboard/': {
      id: '/_authenticated/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof AuthenticatedDashboardIndexImport
      parentRoute: typeof AuthenticatedDashboardImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedDashboardRouteChildren {
  AuthenticatedDashboardIndexRoute: typeof AuthenticatedDashboardIndexRoute
}

const AuthenticatedDashboardRouteChildren: AuthenticatedDashboardRouteChildren =
  {
    AuthenticatedDashboardIndexRoute: AuthenticatedDashboardIndexRoute,
  }

const AuthenticatedDashboardRouteWithChildren =
  AuthenticatedDashboardRoute._addFileChildren(
    AuthenticatedDashboardRouteChildren,
  )

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRouteWithChildren
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRouteWithChildren,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface IndexRouteChildren {
  IndexPostIdRoute: typeof IndexPostIdRoute
  IndexIndexRoute: typeof IndexIndexRoute
}

const IndexRouteChildren: IndexRouteChildren = {
  IndexPostIdRoute: IndexPostIdRoute,
  IndexIndexRoute: IndexIndexRoute,
}

const IndexRouteWithChildren = IndexRoute._addFileChildren(IndexRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof IndexRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/dashboard': typeof AuthenticatedDashboardRouteWithChildren
  '/$postId': typeof IndexPostIdRoute
  '/': typeof IndexIndexRoute
  '/dashboard/': typeof AuthenticatedDashboardIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthenticatedRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/$postId': typeof IndexPostIdRoute
  '/': typeof IndexIndexRoute
  '/dashboard': typeof AuthenticatedDashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/_index': typeof IndexRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/register': typeof AuthRegisterRoute
  '/_authenticated/dashboard': typeof AuthenticatedDashboardRouteWithChildren
  '/_index/$postId': typeof IndexPostIdRoute
  '/_index/': typeof IndexIndexRoute
  '/_authenticated/dashboard/': typeof AuthenticatedDashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/deferred'
    | '/login'
    | '/register'
    | '/dashboard'
    | '/$postId'
    | '/'
    | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/deferred'
    | '/login'
    | '/register'
    | '/$postId'
    | '/'
    | '/dashboard'
  id:
    | '__root__'
    | '/_authenticated'
    | '/_index'
    | '/deferred'
    | '/_auth/login'
    | '/_auth/register'
    | '/_authenticated/dashboard'
    | '/_index/$postId'
    | '/_index/'
    | '/_authenticated/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  IndexRoute: typeof IndexRouteWithChildren
  DeferredRoute: typeof DeferredRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  IndexRoute: IndexRouteWithChildren,
  DeferredRoute: DeferredRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_index",
        "/deferred",
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard"
      ]
    },
    "/_index": {
      "filePath": "_index.tsx",
      "children": [
        "/_index/$postId",
        "/_index/"
      ]
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx"
    },
    "/_auth/register": {
      "filePath": "_auth/register.tsx"
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/dashboard/"
      ]
    },
    "/_index/$postId": {
      "filePath": "_index/$postId.tsx",
      "parent": "/_index"
    },
    "/_index/": {
      "filePath": "_index/index.tsx",
      "parent": "/_index"
    },
    "/_authenticated/dashboard/": {
      "filePath": "_authenticated/dashboard/index.tsx",
      "parent": "/_authenticated/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
