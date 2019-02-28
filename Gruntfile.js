module.exports = function(grunt) {
	grunt.initConfig({
		htmlmin: {
			multiple: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					keepClosingSlash: true
				},
				files: [{
					expand: true,
					cwd: '_site/',
					src: '**/*.html',
					dest: '_site/'
				}]
			}
		},
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					expand: true,
					cwd: 'images',
					src: ['**/*.png'],
					dest: 'images',
					ext: '.png'
				}]
			},
			jpg: {
				options: {
					progressive: false
				},
				files: [{
					expand: true,
					cwd: 'images',
					src: ['**/*.{jpg,JPG}'],
					dest: 'images'
				}]
			}
		},
		shell: {
			build: {
				command: 'jekyll build'
			},
			push: {
				command: 'cd _site && git add -A && git commit -m "automated minified deploy" && git push --all -f'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-shell');


	grunt.registerTask('default', ['newer:imagemin', 'shell:build', 'htmlmin', 'shell:push']);
	grunt.registerTask('image', ['imagemin']);
	grunt.registerTask('build', ['shell']);
}
