/// <reference types="koa" />
import { RenderOptions, AppInitializationOptions } from 'aurelia-ssr-engine';
import { Context } from 'koa';
export declare let aureliaKoaMiddleware: (renderOptions: RenderOptions, initializationOptions: AppInitializationOptions) => (ctx: Context, next: () => void) => void | Promise<void>;
