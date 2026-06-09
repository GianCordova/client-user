import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from "react-native"
 
import { useForm, Controller } from "react-hook-form"
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme"
import Input from "../../../shared/components/Input"
import Button from "../../../shared/components/Button"
import { useAuth } from "../hooks/useAuth"
 
import kinalSportsLogo from "../../../../assets/kinal_sports.png"
 
const RegisterScreen = ({ navigation }) => {

    const { handleRegister,loading } = useAuth()
    const { 
        control, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            username: "",
            email: "",
            password: "",
            cellphone: "",
        },
    });
 
    const onSubmit = async (data) => {
        try {
            await handleRegister(data)

            Alert.alert(
                "Registro exitoso",
                "Tu cuenta a sido creada. Ahora puedes iniciar sesion"
                [{ text: "Ok", onPress: () => navigation.navigate("Login")}]
            )
        } catch (error) {
            console.error(error)
            const message = error.response?.data?.message || "Error al registrarse"
            Alert.alert("Error", message)
        }
    }
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
 
                <View>
                    <Controller
                        control={control}
                        rules={{ required: "Nombre requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre(s)"
                                placeholder="Tu nombre"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.name?.message}
                            />
                        )}
                        name="name"
                    />
 
                    <Controller
                        control={control}
                        rules={{ required: "Apellido requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Apellidos"
                                placeholder="Tus apellidos"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.surname?.message}
                            />
                        )}
                        name="surname"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Usuario requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Usuario"
                                placeholder="nombre_usuario"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.username?.message}
                            />
                        )}
                        name="username"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Telefono requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Telefono"
                                placeholder="Ej. +502 1111 1111"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.cellphone?.message}
                            />
                        )}
                        name="cellphone"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Email requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Email"
                                placeholder="correo@ejemplo.com"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Contraseña requerida" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="••••••••"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />
 
                    <Button
                        title="Registrar"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}                    
                    />
 
                    <View style={styles.footer}>
                        <Text sytle={styles.footerText}>¿Ya tienes cuenta?</Text>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Iniciar Sesion
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        paddingVertical: SPACING.xxl,
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xl,
        marginTop: SPACING.lg,
    },
    logo: {
        height: 60,
        width: 180,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
        paddingBottom: SPACING.xxl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});
 
export default RegisterScreen;