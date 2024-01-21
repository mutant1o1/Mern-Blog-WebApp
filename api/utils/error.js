// this errorHandler will get custom statusCode and error message for the error which is not in the system

export const errorHandler = (statusCode, errorMessage) => {
    const error = new Error();
    error.statusCode = statusCode
    error.message = errorMessage;
    return error;
}