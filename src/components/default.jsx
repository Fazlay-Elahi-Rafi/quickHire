"use client";

import { useEffect } from "react";

// ========= Plugins CSS START =========

// ========= Plugins CSS END =========

export default function Default() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
