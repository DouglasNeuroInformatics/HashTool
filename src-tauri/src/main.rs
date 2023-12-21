// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use sha2::{Digest, Sha256};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn hash(text: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(text);
    let result = hasher.finalize();
    format!("{:x}", result)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hash])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
