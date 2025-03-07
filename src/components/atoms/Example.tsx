import * as motion from "motion/react-client"

export default function Rotate() {
    return (
        <motion.div

            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-10 h-10 bg-pink-500 rounded-lg"
            
        />
    )
}

/**
 * ==============   Styles   ================
 */

