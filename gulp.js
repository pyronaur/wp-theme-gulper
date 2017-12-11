'use strict'

import gulp from 'gulp'

// Configure
import configure from './configure'
import yaml from './util/yaml_parser'

// Dependencies
import sequence from 'run-sequence'


// Import Tasks
import scripts from './tasks/scripts'
import browser_sync from './tasks/browser_sync'
import pot from './tasks/pot'
import stylus from './tasks/stylus'
import pack from './tasks/pack'
import version from './tasks/version'
import { get_version, update_version } from './util/style_css'

const modules = {
    // Configs
    configure: configure,
    yaml     : yaml,

    // Tasks
    browser_sync: browser_sync,
    stylus      : stylus,
    scripts     : scripts,
    pot         : pot,
    pack        : pack,
    version     : version,

    utilities: {
        get_version   : get_version,
        update_version: update_version
    }
}

const scaffold = () => {

    global.config = configure( yaml() )

    // Register Tasks
    gulp.task( 'sync', browser_sync )
    gulp.task( 'scripts', scripts )
    gulp.task( 'pot', pot )
    gulp.task( 'styl', stylus )
    gulp.task( 'pack', pack )
    gulp.task( 'version', version )

    gulp.task( 'build', () => {
        gulp.start( 'styl' )
        gulp.start( 'scripts' )
        gulp.start( 'pot' )
    } )

    gulp.task( 'dist', ( cb ) => {
        global.config.production = true

        return sequence(
            [ 'version', 'styl', 'scripts', 'pot' ],
            'pack',
            cb
        )
    } )
}

export { scaffold as default, modules as modules }
