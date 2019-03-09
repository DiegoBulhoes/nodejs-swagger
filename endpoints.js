
const initializeEndpoints = (app) => {
  /**
      * @swagger
      * /pets:
      *   get:
      *       summary: "View all pets"
      *       description: This should return all pets
      *       consumes:
      *         - "application/json"
      *       produces:
      *         - "application/json"
      *       responses:
      *            200:
      *              description: "successful operation"
      *            405:
      *              description: "Invalid input"
      *            500:
      *              description: "Error server"
   */
  app.get('/v1/pets', (req, res) => res.end('This sould return all pets'));

  /**
      * @swagger
      * /pets/{petId}:
      *   get:
      *       summary: "View pet id"
      *       description: This should return the animal with chosen id
      *       operationId: "getPetById"
      *       consumes:
      *         - "application/json"
      *       produces:
      *         - "application/json"
      *       parameters:
      *          - name: "petId"
      *            in: "path"
      *            description: "ID of pet to return"
      *            required: true
      *            type: "integer"
      *            format: int64
      *       responses:
      *            200:
      *              description: "Successful operation"
      *            400:
      *              description: "Invalid ID supplied"
      *            500:
      *              description: "Error server"
   */
  app.get('/v1/pets/:petId', (req, res) => res.end(`This should return the user with ID ${req.params.petId}`));
};

module.exports = initializeEndpoints;
