import rateLimit from "express-rate-limit";

export const apiRateLimiter = rateLimit({

    windowMs: 15 *60 *1000, // 15 minutes
    max: 50, // Max requisitions per ip
    message: 'Try again in a while.'
});

