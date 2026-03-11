import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // leer variable de entorno
  const maintenance = import.meta.env.PUBLIC_MAINTENANCE === "true";

  // ruta actual
  const { pathname } = context.url;

  // si está en mantenimiento y NO estás ya en /mantenimiento
  if (maintenance && pathname !== "/mantenimiento") {
    return context.redirect("/mantenimiento");
  }

  // continuar normal
  return next();
});