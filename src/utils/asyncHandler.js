// 1st way using promises
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}





export {asyncHandler}
// this is thing happen in last asynchandler function
// const asyncHandler = () => {} 
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

    // 2nd way using try catch
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res,status(error.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }