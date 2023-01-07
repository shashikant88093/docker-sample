const connectToDatabase = () => {
    const dummy = new Promise((resolve, reject) => {
       // timer for i sec
         setTimeout(() => {
                resolve('Connected to database');
            }, 1000);

    });
    return dummy;
};

export default connectToDatabase;