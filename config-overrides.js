const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
    alias({
        "@components": "src/components",
        "@constans": "src/constans",
        "@containers": "src/containers",
        "@hoc-helpers": "src/hoc-helpers",
        "@services": "src/services",
        "@styles": "src/styles",
        "@utils": "src/utils",
        "@routes": "src/routes",
        "@static": "src/static",
        "@hooks": "src/hooks",
        "@UI": "src/components/UI",
    })(config);
    return config;
};