/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
type Profile =
  | { success: false; username: null; user: null }
  | { success: true; username: string; user: string };

declare namespace App {
  interface Locals {
    profile: Profile;
  }
}
