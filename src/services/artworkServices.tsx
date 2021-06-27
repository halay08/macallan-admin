import HttpsCallable from './httpsCallable';

export class ArtworkService extends HttpsCallable {
  async createArtwork(data) {
    const artwork = await this.callHttpsCallable('createArtwork', data);
    return artwork;
  }

  async getArtworkById(id) {
    const artwork = await this.callHttpsCallable('getArtworkById', { id });
    return artwork;
  }

  /**
   * Get all artwork with options
   * @param options options to get artworks. Options contain:
   *  limit: maximum result returned
   *  startAfter: id of last document
   *  withTrashed: true || false
   *  status: in_review || approved || rejected
   *  createdBy: id of created user
   *  orderBy: Array of { field, order: asc | desc }
   *
   * @returns list of artworks
   */
  async getArtworks(options = {}) {
    const artworks = await this.callHttpsCallable('getArtworks', options);
    return artworks;
  }

  /**
   * Get all artwork with options
   * @param contact contact data, contain:
   *  field: name, email, country, age
   *  value
   *
   * @param options option data, contain:
   *  limit: maximum result returned
   *  startAfter: id of last document
   *  withTrashed: true || false
   *  status: in_review || approved || rejected
   *
   * @returns list of artworks with contact
   */
  async searchByContact(contact = {}, options = {}) {
    const artworks = await this.callHttpsCallable('searchArtworksByContact', {
      contact,
      ...options
    });
    return artworks;
  }

  /**
   * Approve artwork
   * @param id artwork id
   *
   * @returns updated artwork
   */
  async approveArtwork(id = '') {
    const artwork = await this.callHttpsCallable('approveArtwork', { id });
    return artwork;
  }

  /**
   * Reject artwork
   * @param id artwork id
   *
   * @returns updated artwork
   */
  async rejectArtwork(id = '') {
    const artwork = await this.callHttpsCallable('rejectArtwork', { id });
    return artwork;
  }
}
