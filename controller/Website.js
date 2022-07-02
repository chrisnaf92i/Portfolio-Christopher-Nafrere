import website from "../model/Site.js";

export const createWebsite = (req, res) => {
    const newWebsite = new website(req.body);

    newWebsite.save()
        .then(() => {
            res.status(201).json({message:"site web enregistré"});
        })
        .catch((err) => {
            res.status(400).json(err)
        });
};

export const getAllWebsite = (req, res) => {
    website.find()
        .then((lstWebsite) => {
            res.status(200).json(lstWebsite);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

export const getOneWebsite = (req, res) => {
    const paramsId = req.params.id;
    website.findOne({_id:paramsId})
        .then(website => {
            res.status(200).json(website)
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

export const deleteOneWebsite = (req, res) => {
    const paramsId = req.params.id;
    website.deleteOne({_id:paramsId})
        .then(() => {
            res.status(200).json({message:"Site supprimer"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
}