const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
	}
	welcome() {
		this.log("Welcome to the Starter Files Generator");
	}
	writing() {
		this.fs.copy(this.templatePath("dist"), this.destinationPath("dist"));
		this.fs.copy(this.templatePath("src"), this.destinationPath("src"));

		this.fs.copy(
			this.templatePath(".gitignore"),
			this.destinationPath(".gitignore")
		);
		this.fs.copy(
			this.templatePath("package.json"),
			this.destinationPath("package.json")
		);
		this.fs.copy(
			this.templatePath("package-lock.json"),
			this.destinationPath("package-lock.json")
		);
		this.fs.copy(
			this.templatePath("webpack.config.js"),
			this.destinationPath("webpack.config.js")
		);
	}

	end() {
		this.log("finished");
	}
};
