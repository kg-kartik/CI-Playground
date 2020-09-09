module.exports.testfunc = (name) => {
    const message = "hell";

    if(!name) {
        return `${message} kartik`
    }
    else {
        return `${message} ${name}`
    }

}
