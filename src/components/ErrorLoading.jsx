// eslint-disable-next-line react/prop-types
export const ErrorLoading = ({ error } = {}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div>Ошибка: {error?.message}</div>
  )
}
