const { exec } = require('child_process');

function execShellCommand(cmd: string) {
    return new Promise((resolve, reject) => {
      exec(cmd, { maxBuffer: 1024 * 500 }, (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.warn(error);
        } else if (stdout) {
          console.log(stdout); 
        } else {
          console.log(stderr);
        }
        resolve(stdout ? true : false);
      });
    });
  }

export {
    execShellCommand
}