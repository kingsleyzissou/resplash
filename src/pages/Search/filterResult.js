export default (result) => {
  const { id, user, alt_description, description, urls } = result
  const { name, username, profile_image } = user
  return {
    id,
    urls: {
      regular: urls.regular,
      full: urls.full
    },
    alt_description,
    description,
    user: {
      id: user.id,
      name,
      username,
      profile_image: {
        medium: profile_image.medium
      }
    }
  }
}