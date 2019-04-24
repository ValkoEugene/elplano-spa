import React, { useState, useEffect } from 'react'
import axios from '../../plugins/axios'
import ProfileForm from './ProfileForm'
import Portlet from '../UI-core/Portlet'
import Loader from '../Loader'
import Typography from '@material-ui/core/Typography'

function ProfileEdit() {
  const REST_URL = '/student'

  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const update = profile => {
    const {
      email,
      phone,
      full_name,
      about,
      social_networks_facebook,
      social_networks_vk,
      social_networks_twitter,
    } = profile

    const data = {
      type: 'student',
      attributes: {
        email,
        phone,
        full_name,
        about,
        social_networks: {
          facebook: social_networks_facebook,
          twitter: social_networks_twitter,
          vk: social_networks_vk,
        },
      },
    }

    axios.put(REST_URL, { data }).catch(error => setError(error))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(REST_URL)

        const profile = result.data.data.attributes

        const { email, phone, full_name, about, social_networks = {} } = profile

        const {
          vk: social_networks_vk,
          twitter: social_networks_twitter,
          facebook: social_networks_facebook,
        } = social_networks

        setProfile({
          email,
          phone,
          full_name,
          about,
          social_networks_facebook,
          social_networks_vk,
          social_networks_twitter,
        })
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      { loading ? (
        <Loader />
      ) : (
        <Portlet>
          <Typography variant="h6" color="primary">
            Настройка профиля
          </Typography>

          <ProfileForm initialValues={ profile } onSubmit={ update } />
        </Portlet>
      ) }
    </div>
  )
}

export default ProfileEdit
