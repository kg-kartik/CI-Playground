module.exports.testfunc = (name) => {
    const message = "hello";

    if(!name) {
        return `${message} kartik`
    }
    else {
        return `${message} ${name}`
    }

}
