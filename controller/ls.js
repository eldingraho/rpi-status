'use strict';

const
    spawn = require( 'child_process' ).spawn,
    ls = spawn( 'ls', [ '-lh' ] );
    gpio_export = spawn( 'echo', [ '>', '4', '/sys/class/gpio/export' ] );
   // gpio_export = spawn('echo', ['>', 'out', '/sys/class/gpio/gpio4/direction']);

gpio_export.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
});

gpio_export.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
});

gpio_export.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
});
