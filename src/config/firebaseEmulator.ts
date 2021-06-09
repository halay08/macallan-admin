class FirebaseEmulator {
  /**
   * Auth endpoint of firebase emulator
   */
  private authEndpoint: string;

  /**
   * Function endpoint of firebase emulator
   */
  private functionEndpoint: string;

  /**
   * Creates an instance of firebase emulator.
   * @param firebase
   */
  constructor(private readonly firebase) {
    const {
      REACT_APP_AUTH_EMULATOR_ENDPOINT,
      REACT_APP_FUNCTION_EMULATOR_ENDPOINT
    } = process.env;

    if (!firebase) throw new Error("Firebase hasn't been initialied!");

    this.firebase = firebase;

    this.authEndpoint =
      REACT_APP_AUTH_EMULATOR_ENDPOINT || 'http://localhost:9099';
    this.functionEndpoint =
      REACT_APP_FUNCTION_EMULATOR_ENDPOINT || 'http://localhost:5001';
  }

  useAuth(): FirebaseEmulator {
    this.firebase.auth().useEmulator(this.authEndpoint);
    return this;
  }

  useFunctions(): FirebaseEmulator {
    this.firebase.functions().useFunctionsEmulator(this.functionEndpoint);
    return this;
  }
}

export { FirebaseEmulator };
