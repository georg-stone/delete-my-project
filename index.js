#!/usr/bin/env node
const { execSync } = require('child_process');
const os = require('os');

if (os.platform() == 'win32') {
    try {
        console.log('warning: this will delete all files within this directory. deleting your project in 10 seconds... (press ctrl+c to cancel)');
        setTimeout(() => {
          execSync('del /q *');
          execSync('for /d %p in (*) do rmdir /s /q "%p"');     

          console.log('deleted your project.');
        }, 10000);
      } catch (error) {
        console.error('An error occurred during deletion:', error);
      }
} else {
try {
  console.log('warning: this will delete all files within this directory. deleting your project in 10 seconds... (press ctrl+c to cancel)');
  setTimeout(() => {
    execSync('rm -rf ./*');

    console.log('deleted your project.');
  }, 10000);
} catch (error) {
  console.error('An error occurred during deletion:', error);
}
}