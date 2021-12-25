
import {db} from "./database";

export function readResumeDetails(req, res) {
    res.status(200).json({resumeDetails:db.readResumeDetails()});
}