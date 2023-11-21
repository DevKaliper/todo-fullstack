import cors from "cors";

export const corsMiddleware = () => {
    return cors({
        origin: (origin, callback) => {
          // Para permitir el acceso a la API desde el frontend en modo desarrollo
          const whitelist = ["http://localhost:3000"];
          if (!origin || whitelist.some((domain) => domain === origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
      })
}