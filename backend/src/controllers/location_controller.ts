import User,{IUser} from '../models/user';
import unsafeLocation,{IUnsafeLocation} from '../models/unsafe_location';

export const getAllLocations = async()=>{
    const allLocations = await unsafeLocation.find({});
}